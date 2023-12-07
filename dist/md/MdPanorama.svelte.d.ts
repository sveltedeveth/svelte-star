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
export type MdPanoramaProps = typeof __propDef.props;
export type MdPanoramaEvents = typeof __propDef.events;
export type MdPanoramaSlots = typeof __propDef.slots;
export default class MdPanorama extends SvelteComponentTyped<MdPanoramaProps, MdPanoramaEvents, MdPanoramaSlots> {
}
export {};
