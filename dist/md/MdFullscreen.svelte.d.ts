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
export type MdFullscreenProps = typeof __propDef.props;
export type MdFullscreenEvents = typeof __propDef.events;
export type MdFullscreenSlots = typeof __propDef.slots;
export default class MdFullscreen extends SvelteComponentTyped<MdFullscreenProps, MdFullscreenEvents, MdFullscreenSlots> {
}
export {};
