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
export type MdPanoramaVerticalProps = typeof __propDef.props;
export type MdPanoramaVerticalEvents = typeof __propDef.events;
export type MdPanoramaVerticalSlots = typeof __propDef.slots;
export default class MdPanoramaVertical extends SvelteComponentTyped<MdPanoramaVerticalProps, MdPanoramaVerticalEvents, MdPanoramaVerticalSlots> {
}
export {};
