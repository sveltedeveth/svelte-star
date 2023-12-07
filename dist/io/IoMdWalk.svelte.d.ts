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
export type IoMdWalkProps = typeof __propDef.props;
export type IoMdWalkEvents = typeof __propDef.events;
export type IoMdWalkSlots = typeof __propDef.slots;
export default class IoMdWalk extends SvelteComponentTyped<IoMdWalkProps, IoMdWalkEvents, IoMdWalkSlots> {
}
export {};
