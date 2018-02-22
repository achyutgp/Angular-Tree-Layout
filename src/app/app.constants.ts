const AUDIO_FORMATS: string[] = [
  '3gp', 'aa', 'aac', 'aax', 'act', 'aiff', 'amr', 'ape', 'au', 'awb',
  'dct', 'dss', 'dvf', 'flac', 'gsm', 'iklax', 'ivs', 'm4a', 'm4b', 'm4p',
  'mmf', 'mp3', 'mpc', 'msv', 'ogg', 'oga', 'mogg', 'opus', 'ra', 'rm',
  'raw', 'sln', 'tta', 'vox', 'wav', 'wma', 'wv', 'webm', '8svx'
];

const VIDEO_FORMATS: string[] = [
'webm', 'mkv', 'flv',	'vob', 'ogv', 'ogg', 'drc', 'gif', 'gifv',
'mng', 'avi', 'mov', 'qt', 'wmv', 'yuv', 'rm', 'rmvb', 'asf', 'amv',
'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm2v', 'svi',
'3gp', '3g2', 'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b'
];

const IMAGE_FORMATS: string[] = [
'png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'
];

const CODE_FORMATS: string[] = [
'html', 'css', 'scss', 'sass', 'js', 'ts', 'json', 'py', 'java', 'class'
];

const ARCHIVE_FORMATS: string[] = [
  'a', 'ar', 'cpio', 'shar', 'LBR', 'iso', 'lbr', 'mar', 'sbx', 'tar',
  '7z', 's7z', 'ace', 'afa', 'alz', 'apk', 'arc', 'arj', 'b1', 'b6z',
  'ba', 'bh', 'cab', 'car', 'cfs', 'cpt', 'dar', 'dd', 'dgc', 'dmg',
  'ear', 'gca', 'ha', 'hki', 'ice', 'jar', 'kgb', 'lzh', 'lha', 'lzx',
  'pak', 'partimg', 'paq6', 'paq7', 'paq8', 'pea', 'pim', 'pit', 'qda', 'rar',
  'rk', 'sda', 'sea', 'sen', 'sfx', 'shk', 'sit', 'sitx', 'sqx', 'tar.gz',
  'tgz', 'tar.Z', 'tar.bz2', 'tbz2', 'tar.lzma', 'tlz', 'tar.xz', 'txz', 'uc', 'uc0',
  'uc2', 'ucn', 'ur2', 'ue2', 'uca', 'uha', 'war', 'wim', 'xar', 'xp3',
  'yz1', 'zip', 'zipx', 'zoo', 'zpaq', 'zz'
];

export interface IconPackage {
  formats: string[];
  icon: string;
}

export const FONT_AWESOME_ICONS: IconPackage[] = [
  { formats: [...ARCHIVE_FORMATS], icon: 'fa fa-file-archive-o'},
  { formats: [...AUDIO_FORMATS], icon: 'fa fa-file-audio-o'},
  { formats: [...VIDEO_FORMATS], icon: 'fa fa-file-movie-o'},
  { formats: ['pdf'], icon: 'fa fa-file-pdf-o'},
  { formats: ['ppt'], icon: 'fa fa-file-powerpoint-o'},
  { formats: ['doc', 'docx'], icon: 'fa fa-file-word-o'},
  { formats: ['xls', 'xlsx'], icon: 'fa fa-file-excel-o'},
  { formats: [''], icon: 'fa fa-file-o'},
  { formats: ['txt', 'csv', 'xml'], icon: 'fa fa-file-text-o'},
  { formats: [...IMAGE_FORMATS], icon: 'fa fa-file-image-o'},
  { formats: [...CODE_FORMATS], icon: 'fa fa-file-code-o'}
];

