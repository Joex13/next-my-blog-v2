import Link from 'next/link';

type Props = {
  totalPage: number;
  currentPage: number;
  visiblePages: number;
};

const Pagination = ({ totalPage, currentPage, visiblePages }: Props) => {
  const pageNumbers = [...Array(totalPage)].map((_, i) => i + 1);
  let visibleStart = 1;
  let visibleEnd = totalPage;

  if (visiblePages && visiblePages < totalPage) {
    visibleStart = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    visibleEnd = Math.min(totalPage, visibleStart + visiblePages - 1);
    if (visibleEnd - visibleStart + 1 < visiblePages) {
      visibleStart = Math.max(
        1,
        visibleStart - (visiblePages - (visibleEnd - visibleStart + 1))
      );
    }
  }

  const visiblePageNumbers = pageNumbers.filter(
    (pageNumber) => pageNumber >= visibleStart && pageNumber <= visibleEnd
  );

  return (
    <nav className="mt-4">
      <ul className="flex justify-center gap-4">
        {visiblePageNumbers.map((number, index) => (
          <>
            {visibleStart > 1 && index === 0 && (
              <>
                <li
                  className={`duration-300 bg-orange-600 hover:opacity-70 ${
                    currentPage === number &&
                    'bg-orange-900 text-white pointer-events-none'
                  }`}
                >
                  <Link className="inline-block p-3" href="/blog/1">
                    1
                  </Link>
                </li>
                <span className="self-center">...</span>
              </>
            )}
            <li
              key={number}
              className={`duration-300 bg-orange-600 hover:opacity-70 ${
                currentPage === number &&
                'bg-orange-900 text-white pointer-events-none'
              }`}
            >
              <Link className="inline-block p-3" href={`/blog/${number}`}>
                {number}
              </Link>
            </li>
            {visibleEnd < totalPage &&
              index === visiblePageNumbers.length - 1 && (
                <>
                  <span className="self-center">...</span>
                  <li
                    className={`duration-300 bg-orange-600 hover:opacity-70 ${
                      currentPage === number &&
                      'bg-orange-900 text-white pointer-events-none'
                    }`}
                  >
                    <Link
                      className="inline-block p-3"
                      href={`/blog/${totalPage}`}
                    >
                      {totalPage}
                    </Link>
                  </li>
                </>
              )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
