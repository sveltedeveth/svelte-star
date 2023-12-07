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
export type FaCompactDiscProps = typeof __propDef.props;
export type FaCompactDiscEvents = typeof __propDef.events;
export type FaCompactDiscSlots = typeof __propDef.slots;
export default class FaCompactDisc extends SvelteComponentTyped<FaCompactDiscProps, FaCompactDiscEvents, FaCompactDiscSlots> {
}
export {};
