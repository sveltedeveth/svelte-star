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
export type MdStraightenProps = typeof __propDef.props;
export type MdStraightenEvents = typeof __propDef.events;
export type MdStraightenSlots = typeof __propDef.slots;
export default class MdStraighten extends SvelteComponentTyped<MdStraightenProps, MdStraightenEvents, MdStraightenSlots> {
}
export {};
