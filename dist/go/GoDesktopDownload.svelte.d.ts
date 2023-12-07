import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoDesktopDownloadProps = typeof __propDef.props;
export type GoDesktopDownloadEvents = typeof __propDef.events;
export type GoDesktopDownloadSlots = typeof __propDef.slots;
export default class GoDesktopDownload extends SvelteComponentTyped<GoDesktopDownloadProps, GoDesktopDownloadEvents, GoDesktopDownloadSlots> {
}
export {};
