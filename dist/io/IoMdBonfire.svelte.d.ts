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
export type IoMdBonfireProps = typeof __propDef.props;
export type IoMdBonfireEvents = typeof __propDef.events;
export type IoMdBonfireSlots = typeof __propDef.slots;
export default class IoMdBonfire extends SvelteComponentTyped<IoMdBonfireProps, IoMdBonfireEvents, IoMdBonfireSlots> {
}
export {};
