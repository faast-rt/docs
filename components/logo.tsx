import { useConfig } from 'nextra-theme-docs/.';
import { useState } from 'react';

export default function RocketLogo() {
  const [fillColor, setColor] = useState<string>('white');

  const { darkMode } = useConfig();

  if (darkMode) {
    setColor('black');
  } else {
    setColor('white');
  }

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="20%"
      viewBox="-450 -100 784 928"
      xmlSpace="preserve"
    >
      <g transform="rotate(45)">
        <path
          fill={fillColor}
          opacity="1.000000"
          stroke="none"
          d="
M327.519348,390.586731 
	C319.881287,384.684845 312.491180,379.050049 305.187775,373.305054 
	C303.210663,371.749817 301.215668,370.730011 298.793427,371.833740 
	C296.172363,373.028107 296.329102,375.509766 296.336151,377.873810 
	C296.350555,382.706482 296.337250,387.539185 296.334625,392.371887 
	C296.328003,404.423798 291.957184,409.243530 279.873627,410.255707 
	C277.583832,410.447540 275.206329,410.248199 272.933594,409.856537 
	C267.615570,408.940033 266.379974,409.833191 266.361206,415.382660 
	C266.315582,428.880737 266.336426,442.379059 266.339661,455.877289 
	C266.341095,461.818481 263.445801,466.108582 258.326141,468.651794 
	C249.526657,473.022919 239.812515,465.523682 239.688736,454.254608 
	C239.547806,441.424500 239.665344,428.591644 239.642944,415.760040 
	C239.632156,409.576874 239.410309,409.381317 233.060043,409.364502 
	C228.893967,409.353485 224.713486,409.588531 220.565430,409.316895 
	C215.675751,408.996735 214.247208,411.129272 214.267410,415.808350 
	C214.406235,447.970215 214.294998,480.133087 214.385376,512.295288 
	C214.400757,517.770935 212.473785,522.102234 207.962067,525.029602 
	C204.034958,527.577698 199.989899,528.559326 195.375717,525.813477 
	C190.053955,522.646606 187.698990,518.124756 187.680038,512.245728 
	C187.611816,491.082001 187.649933,469.917999 187.647675,448.754089 
	C187.646484,437.588898 187.527115,426.421814 187.703720,415.259430 
	C187.770599,411.032684 186.380890,409.073181 181.947235,409.307251 
	C177.460083,409.544159 172.941330,409.554779 168.454453,409.320129 
	C163.938339,409.083984 162.203659,410.834076 162.276138,415.423889 
	C162.476120,428.085693 162.300919,440.753021 162.368088,453.417664 
	C162.384277,456.471283 161.862747,459.409424 160.647812,462.124542 
	C158.441833,467.054321 152.210007,470.710999 147.915451,469.903320 
	C140.807144,468.566498 135.778366,462.916779 135.700790,455.635529 
	C135.560577,442.472046 135.666641,429.306030 135.641388,416.141144 
	C135.628647,409.503448 135.333893,409.626343 128.939758,410.160797 
	C115.240784,411.305847 104.841179,407.521057 105.621338,390.417114 
	C105.818558,386.093384 105.652283,381.752899 105.645157,377.420135 
	C105.643517,376.420563 105.690872,375.411560 105.576050,374.423126 
	C105.110283,370.413849 102.685555,369.247833 99.436577,371.762604 
	C94.988670,375.205353 90.770683,378.945709 86.463875,382.570068 
	C78.979301,388.868622 71.559021,395.245483 63.990036,401.440765 
	C61.460564,403.511169 60.254662,405.792389 60.293159,409.124023 
	C60.429863,420.954193 60.372650,432.787048 60.325741,444.618683 
	C60.293617,452.721130 54.464722,459.180878 47.175209,459.323486 
	C40.330807,459.457367 33.842865,452.588959 33.695992,444.730591 
	C33.540314,436.401184 33.677433,428.066681 33.645679,419.734558 
	C33.609592,410.265442 32.947147,400.781036 32.933922,391.355103 
	C32.917423,379.602448 32.223473,367.850800 32.639790,356.092041 
	C33.360348,335.740112 39.531998,317.746582 54.582577,303.341187 
	C65.161430,293.215820 75.226143,282.524323 86.184479,272.836792 
	C91.526878,268.113892 96.040123,262.465210 102.048569,258.482544 
	C104.955978,256.555359 105.733658,253.738235 105.710083,250.277328 
	C105.582947,231.613968 105.225983,212.937347 105.750809,194.287872 
	C106.537590,166.330063 112.719307,139.473114 123.507545,113.619942 
	C129.307465,99.720863 136.767883,86.748955 144.997009,74.269310 
	C150.263550,66.282478 156.789749,59.099670 163.005753,51.772312 
	C170.639999,42.773151 178.963516,34.435867 187.925812,26.724171 
	C191.059784,24.027521 194.568024,21.776857 197.310318,18.572664 
	C199.067627,16.519402 201.456207,16.639174 203.559341,18.357893 
	C209.336411,23.079006 215.312897,27.589920 220.781342,32.647976 
	C232.999237,43.949009 244.092758,56.264233 253.861267,69.805016 
	C272.072937,95.049446 285.000610,122.632492 291.579834,153.100967 
	C294.166870,165.081711 295.727448,177.156387 296.553925,189.449722 
	C297.953094,210.262497 296.852570,231.048187 297.297882,251.837921 
	C297.358673,254.677612 297.866394,257.004730 300.129944,258.909607 
	C315.115204,271.520325 329.856842,284.390228 344.272461,297.670959 
	C356.956116,309.356049 366.491760,322.615143 370.743256,339.395355 
	C371.631226,342.900024 372.252594,346.579651 372.266479,350.181458 
	C372.386597,381.343597 372.322968,412.506378 372.356049,443.668945 
	C372.362854,450.082275 369.549957,455.108002 364.162964,458.095215 
	C357.443695,461.821198 347.822296,457.159882 345.957672,449.447845 
	C345.193451,446.286957 344.106842,442.991699 344.724091,439.622009 
	C346.663361,429.034882 345.182922,418.358978 345.646149,407.735870 
	C345.732178,405.763031 345.139801,404.145721 343.548096,402.923645 
	C338.295502,398.890686 333.048828,394.850098 327.519348,390.586731 
M256.439819,124.919670 
	C245.080063,97.235771 227.615555,73.850006 206.028076,53.376041 
	C201.562851,49.141171 199.945892,49.243515 195.627136,53.493351 
	C175.487366,73.311729 160.599594,96.749962 148.087845,121.887726 
	C139.087875,139.969879 134.238739,159.245773 132.584518,179.149139 
	C131.362045,193.857819 131.855667,208.724274 131.564148,223.514450 
	C131.184265,242.785324 130.959213,262.080750 132.092361,281.398712 
	C132.956100,296.123474 132.368088,310.962189 131.567810,325.779724 
	C130.634613,343.058594 131.338791,360.426453 131.354156,377.755676 
	C131.359940,384.283813 131.694992,384.636292 138.064148,384.647797 
	C152.227432,384.673370 166.390793,384.668732 180.554108,384.655792 
	C187.365448,384.649597 187.643463,384.377075 187.646561,377.625885 
	C187.657684,353.464935 187.638458,329.303955 187.657303,305.143005 
	C187.663879,296.694397 193.482590,289.805969 200.646332,289.664612 
	C208.274582,289.514099 214.608475,296.249847 214.258850,304.948181 
	C213.772568,317.046570 215.651703,329.036499 214.631561,341.233704 
	C213.598785,353.582092 213.861832,366.129333 215.187836,378.595642 
	C215.662064,383.054108 216.875046,384.775757 221.409286,384.716705 
	C235.236969,384.536621 249.068558,384.660004 262.898621,384.655945 
	C270.630188,384.653687 270.651123,384.645325 270.652130,376.806854 
	C270.660004,315.487976 270.670105,254.169128 270.641998,192.850281 
	C270.639587,187.546463 270.563446,182.281067 269.822632,176.953781 
	C267.371735,159.330170 263.351135,142.159378 256.439819,124.919670 
z"
        />
        <path
          fill={fillColor}
          d="
M181.416748,192.733032 
	C169.464127,185.673691 164.195312,174.399185 163.256775,161.965866 
	C162.441498,151.165405 167.203583,140.917297 175.629364,133.719650 
	C199.497620,113.330376 233.295471,125.467377 239.021973,156.434341 
	C240.747437,165.764984 237.911636,174.545258 232.357117,182.274597 
	C224.617355,193.044815 214.170456,199.160797 200.809967,199.263428 
	C193.907578,199.316467 187.609482,196.496674 181.416748,192.733032 
M216.644135,160.675369 
	C215.071777,150.001205 209.142502,145.446136 198.072311,146.407883 
	C190.805374,147.039200 185.982925,153.938980 186.348114,163.182404 
	C186.633041,170.394379 192.903214,176.483078 200.220963,176.653717 
	C210.153015,176.885315 215.845779,171.632446 216.644135,160.675369 
z"
        />
      </g>
    </svg>
  );
}
