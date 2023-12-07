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
export type FaQuinscapeProps = typeof __propDef.props;
export type FaQuinscapeEvents = typeof __propDef.events;
export type FaQuinscapeSlots = typeof __propDef.slots;
export default class FaQuinscape extends SvelteComponentTyped<FaQuinscapeProps, FaQuinscapeEvents, FaQuinscapeSlots> {
}
export {};
