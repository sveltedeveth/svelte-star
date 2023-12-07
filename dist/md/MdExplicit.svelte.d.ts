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
export type MdExplicitProps = typeof __propDef.props;
export type MdExplicitEvents = typeof __propDef.events;
export type MdExplicitSlots = typeof __propDef.slots;
export default class MdExplicit extends SvelteComponentTyped<MdExplicitProps, MdExplicitEvents, MdExplicitSlots> {
}
export {};
