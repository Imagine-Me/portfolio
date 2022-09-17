import { motion } from "framer-motion";

export interface IconProps {
  color: string;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0.5) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 4.5, bounce: 0 },
        opacity: { delay },
      },
    };
  },
};

export const NextIcon = ({ color }: IconProps) => {
  return (
    <motion.svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={draw}
    >
      <motion.path
        d="M0.292444 0.293762C0.199741 0.386276 0.126193 0.496165 0.0760117 0.617138C0.0258302 0.738111 0 0.867794 0 0.998762C0 1.12973 0.0258302 1.25941 0.0760117 1.38039C0.126193 1.50136 0.199741 1.61125 0.292444 1.70376L4.17244 5.58376L0.292444 9.46376C0.105467 9.65074 0.000423431 9.90434 0.000423431 10.1688C0.000423431 10.4332 0.105467 10.6868 0.292444 10.8738C0.479422 11.0607 0.733018 11.1658 0.997444 11.1658C1.26187 11.1658 1.51547 11.0607 1.70244 10.8738L6.29244 6.28376C6.38515 6.19125 6.4587 6.08136 6.50888 5.96039C6.55906 5.83941 6.58489 5.70973 6.58489 5.57876C6.58489 5.44779 6.55906 5.31811 6.50888 5.19714C6.4587 5.07616 6.38515 4.96628 6.29244 4.87376L1.70244 0.283762C1.32244 -0.0962379 0.682444 -0.0962377 0.292444 0.293762Z"
        fill={color}
        variants={draw}
      />
      <motion.path
        d="M7.29244 0.293762C7.19974 0.386276 7.12619 0.496165 7.07601 0.617138C7.02583 0.738111 7 0.867794 7 0.998762C7 1.12973 7.02583 1.25941 7.07601 1.38039C7.12619 1.50136 7.19974 1.61125 7.29244 1.70376L11.1724 5.58376L7.29244 9.46376C7.10547 9.65074 7.00042 9.90434 7.00042 10.1688C7.00042 10.4332 7.10547 10.6868 7.29244 10.8738C7.47942 11.0607 7.73302 11.1658 7.99744 11.1658C8.26187 11.1658 8.51547 11.0607 8.70244 10.8738L13.2924 6.28376C13.3851 6.19125 13.4587 6.08136 13.5089 5.96039C13.5591 5.83941 13.5849 5.70973 13.5849 5.57876C13.5849 5.44779 13.5591 5.31811 13.5089 5.19714C13.4587 5.07616 13.3851 4.96628 13.2924 4.87376L8.70244 0.283762C8.32244 -0.0962379 7.68244 -0.0962377 7.29244 0.293762Z"
        fill={color}
        variants={draw}
      />
    </motion.svg>
  );
};

export const DownloadIcon = ({ color }: IconProps) => {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={draw}
    >
      <motion.path
        d="M7.86524 11.3864C7.88125 11.4081 7.9017 11.4257 7.92505 11.4378C7.9484 11.4498 7.97403 11.4561 8 11.4561C8.02597 11.4561 8.0516 11.4498 8.07495 11.4378C8.0983 11.4257 8.11875 11.4081 8.13476 11.3864L10.5305 8.16591C10.6182 8.04773 10.539 7.87273 10.3957 7.87273H8.8107V0.181818C8.8107 0.0818182 8.73369 0 8.63957 0H7.35615C7.26203 0 7.18503 0.0818182 7.18503 0.181818V7.87045H5.60428C5.46096 7.87045 5.38182 8.04545 5.46952 8.16364L7.86524 11.3864ZM15.8289 10.5909H14.5455C14.4513 10.5909 14.3743 10.6727 14.3743 10.7727V14.2727H1.62567V10.7727C1.62567 10.6727 1.54866 10.5909 1.45455 10.5909H0.171123C0.0770053 10.5909 0 10.6727 0 10.7727V15.2727C0 15.675 0.305882 16 0.684492 16H15.3155C15.6941 16 16 15.675 16 15.2727V10.7727C16 10.6727 15.923 10.5909 15.8289 10.5909Z"
        fill={color}
        variants={draw}
      />
    </motion.svg>
  );
};

export const GithubIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0.7725C2.9725 0.7725 0.5215 3.211 0.5215 6.214C0.5215 8.419 1.843 10.3165 3.745 11.17C3.944 11.2595 4.1385 11.224 4.2905 11.11C4.37456 11.0445 4.44232 10.9605 4.48847 10.8645C4.53462 10.7684 4.5579 10.663 4.5565 10.5565V10.2715L3.878 10.1795C3.87298 10.1788 3.86797 10.178 3.863 10.177C3.489 10.104 3.2365 9.9725 3.0515 9.783C2.896 9.6235 2.801 9.4325 2.7205 9.2705L2.6925 9.214C2.6181 9.05881 2.53685 8.90699 2.449 8.759C2.3815 8.652 2.329 8.597 2.277 8.5625C2.145 8.475 2.018 8.3265 2.018 8.141C2.01755 8.08761 2.02898 8.03479 2.05146 7.98636C2.07395 7.93793 2.10692 7.89511 2.148 7.861C2.22553 7.79962 2.32215 7.76741 2.421 7.77C2.532 7.77 2.6365 7.804 2.7235 7.843C2.8125 7.883 2.901 7.936 2.9835 7.991C3.1845 8.125 3.3825 8.2835 3.55 8.479C3.7245 8.682 3.848 8.811 4.034 8.8375C4.187 8.8595 4.343 8.86 4.4645 8.8545C4.48139 8.7583 4.50923 8.66436 4.5475 8.5745C4.39911 8.53987 4.25272 8.49714 4.109 8.4465C3.782 8.3305 3.4175 8.15 3.1725 7.8765C2.9035 7.5755 2.737 7.307 2.644 6.993C2.5535 6.687 2.5385 6.3555 2.5385 5.9475C2.5385 5.3225 2.809 4.796 3.012 4.5165C2.93401 4.2718 2.87795 4.02064 2.8445 3.766C2.82234 3.60542 2.82251 3.44254 2.845 3.282C2.87 3.1355 2.9325 2.9555 3.097 2.847C3.2555 2.7415 3.4415 2.746 3.5865 2.773C3.737 2.8015 3.8935 2.864 4.0375 2.9355C4.272 3.0515 4.505 3.2065 4.6795 3.338C4.9805 3.2495 5.513 3.1355 5.9945 3.125H6.0055C6.4875 3.1355 6.996 3.2495 7.2895 3.3375C7.4645 3.2065 7.697 3.051 7.931 2.9355C8.075 2.864 8.231 2.8015 8.382 2.773C8.527 2.746 8.713 2.7415 8.872 2.8465C9.036 2.9555 9.099 3.1355 9.1235 3.282C9.149 3.4345 9.143 3.605 9.1235 3.766C9.09019 4.02062 9.03431 4.27178 8.9565 4.5165C9.1595 4.7965 9.43 5.323 9.43 5.9475C9.43 6.3555 9.415 6.687 9.325 6.9925C9.2315 7.3075 9.065 7.5755 8.796 7.8765C8.551 8.15 8.1865 8.3305 7.8595 8.4465C7.68592 8.50751 7.50854 8.55711 7.3285 8.595C7.39 8.781 7.412 8.9315 7.412 9.018V10.563C7.412 10.798 7.5215 10.9985 7.677 11.1155C7.828 11.23 8.022 11.2655 8.221 11.1785C10.141 10.3325 11.478 8.43 11.478 6.2135C11.478 3.211 9.028 0.7725 6 0.7725ZM4.738 9.355C4.608 9.3735 4.7375 9.355 4.7375 9.355H4.736L4.732 9.356L4.7175 9.358C4.64323 9.36673 4.56869 9.3729 4.494 9.3765C4.31605 9.38577 4.13762 9.37858 3.961 9.355C3.5655 9.299 3.325 9.019 3.1695 8.837L3.1545 8.82C3.10366 8.76102 3.04904 8.7054 2.991 8.6535C3.0425 8.7485 3.096 8.8545 3.1535 8.9685L3.1585 8.9785L3.184 9.0305C3.2715 9.2045 3.329 9.3205 3.4245 9.4175C3.5175 9.5125 3.6625 9.6045 3.9555 9.6625L4.8525 9.784C4.91515 9.79248 4.97259 9.82341 5.01416 9.87104C5.05572 9.91868 5.07859 9.97978 5.0785 10.043V10.5565C5.0785 10.9565 4.891 11.313 4.6035 11.529C4.45256 11.6443 4.27299 11.7163 4.08417 11.7371C3.89534 11.7579 3.70443 11.7267 3.532 11.647C1.451 10.7135 0 8.635 0 6.214C0 2.918 2.6885 0.25 6 0.25C9.3115 0.25 12 2.918 12 6.214C12 8.6475 10.5305 10.7315 8.4315 11.657C8.25893 11.7352 8.06835 11.765 7.88014 11.7433C7.69193 11.7215 7.51318 11.649 7.363 11.5335C7.21451 11.4192 7.09453 11.272 7.01246 11.1036C6.9304 10.9351 6.88848 10.7499 6.89 10.5625V9.0175C6.89 8.9825 6.8655 8.7805 6.729 8.509C6.71016 8.47135 6.70067 8.42972 6.70133 8.38763C6.70199 8.34553 6.71278 8.30422 6.7328 8.26718C6.75281 8.23015 6.78146 8.19848 6.81631 8.17486C6.85116 8.15124 6.89118 8.13637 6.933 8.1315C7.18934 8.09937 7.44146 8.03969 7.685 7.9535C7.982 7.8485 8.2485 7.7045 8.407 7.5275C8.6425 7.2645 8.76 7.0625 8.8245 6.844C8.8915 6.6175 8.9085 6.354 8.9085 5.9475C8.9085 5.377 8.6085 4.8975 8.4705 4.743C8.43917 4.70808 8.41782 4.66538 8.40867 4.61937C8.39952 4.57337 8.40292 4.52574 8.4185 4.4815C8.50738 4.22959 8.57021 3.96922 8.606 3.7045C8.622 3.567 8.623 3.452 8.609 3.369C8.60586 3.33865 8.59668 3.30924 8.582 3.2825C8.54758 3.27654 8.51228 3.27808 8.4785 3.287C8.3935 3.303 8.285 3.343 8.162 3.404C7.917 3.525 7.662 3.704 7.504 3.832C7.46916 3.86027 7.42759 3.87904 7.38334 3.88649C7.3391 3.89393 7.29368 3.88981 7.2515 3.8745C6.84667 3.74207 6.42557 3.66586 6 3.648C5.4965 3.66 4.9155 3.803 4.717 3.8745C4.67482 3.88981 4.6294 3.89393 4.58516 3.88649C4.54091 3.87904 4.49934 3.86027 4.4645 3.832C4.26017 3.6675 4.03971 3.5241 3.8065 3.404C3.70636 3.35141 3.5998 3.31208 3.4895 3.287C3.45588 3.27815 3.42076 3.27662 3.3865 3.2825C3.3718 3.30924 3.36262 3.33865 3.3595 3.369C3.3455 3.452 3.3465 3.567 3.3625 3.7045C3.39853 3.96918 3.46136 4.22952 3.55 4.4815C3.5815 4.5715 3.562 4.6715 3.498 4.743C3.36 4.8975 3.06 5.377 3.06 5.9475C3.06 6.3535 3.077 6.6175 3.144 6.844C3.209 7.0625 3.326 7.264 3.561 7.5275C3.72 7.7045 3.986 7.8485 4.2835 7.9535C4.52689 8.03963 4.77884 8.09931 5.035 8.1315C5.0877 8.13716 5.13743 8.15872 5.17758 8.19334C5.21772 8.22795 5.24638 8.27396 5.25973 8.32526C5.27308 8.37655 5.2705 8.4307 5.25233 8.48049C5.23416 8.53028 5.20126 8.57336 5.158 8.604C5.0755 8.663 5.021 8.769 4.9905 8.8915C4.97475 8.95457 4.96537 9.01906 4.9625 9.084V9.0935C4.96314 9.1569 4.94072 9.21836 4.89943 9.26647C4.85813 9.31457 4.80076 9.34603 4.738 9.355Z"
      fill="white"
    />
  </svg>
);

export const LinkIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.7719 4.22798C5.36235 3.8186 4.80698 3.58862 4.22791 3.58862C3.64883 3.58862 3.09346 3.8186 2.68391 4.22798L1.13941 5.77198C0.729844 6.18154 0.499756 6.73702 0.499756 7.31623C0.499756 7.89544 0.729844 8.45092 1.13941 8.86048C1.54897 9.27004 2.10445 9.50013 2.68366 9.50013C3.26286 9.50013 3.81834 9.27004 4.22791 8.86048L4.99991 8.08848"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.22803 5.77203C4.63758 6.18141 5.19295 6.41139 5.77203 6.41139C6.3511 6.41139 6.90647 6.18141 7.31603 5.77203L8.86053 4.22803C9.27009 3.81847 9.50018 3.26298 9.50018 2.68378C9.50018 2.10457 9.27009 1.54909 8.86053 1.13953C8.45097 0.729967 7.89548 0.499878 7.31628 0.499878C6.73707 0.499878 6.18159 0.729967 5.77203 1.13953L5.00003 1.91153"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
