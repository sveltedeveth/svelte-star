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
export type MdPanoramaHorizontalProps = typeof __propDef.props;
export type MdPanoramaHorizontalEvents = typeof __propDef.events;
export type MdPanoramaHorizontalSlots = typeof __propDef.slots;
export default class MdPanoramaHorizontal extends SvelteComponentTyped<MdPanoramaHorizontalProps, MdPanoramaHorizontalEvents, MdPanoramaHorizontalSlots> {
}
export {};
