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
export type FaStrikethroughProps = typeof __propDef.props;
export type FaStrikethroughEvents = typeof __propDef.events;
export type FaStrikethroughSlots = typeof __propDef.slots;
export default class FaStrikethrough extends SvelteComponentTyped<FaStrikethroughProps, FaStrikethroughEvents, FaStrikethroughSlots> {
}
export {};
