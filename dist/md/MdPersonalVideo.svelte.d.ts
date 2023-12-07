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
export type MdPersonalVideoProps = typeof __propDef.props;
export type MdPersonalVideoEvents = typeof __propDef.events;
export type MdPersonalVideoSlots = typeof __propDef.slots;
export default class MdPersonalVideo extends SvelteComponentTyped<MdPersonalVideoProps, MdPersonalVideoEvents, MdPersonalVideoSlots> {
}
export {};
