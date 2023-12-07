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
export type MdOndemandVideoProps = typeof __propDef.props;
export type MdOndemandVideoEvents = typeof __propDef.events;
export type MdOndemandVideoSlots = typeof __propDef.slots;
export default class MdOndemandVideo extends SvelteComponentTyped<MdOndemandVideoProps, MdOndemandVideoEvents, MdOndemandVideoSlots> {
}
export {};
