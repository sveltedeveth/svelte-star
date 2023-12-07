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
export type MdViewCompactProps = typeof __propDef.props;
export type MdViewCompactEvents = typeof __propDef.events;
export type MdViewCompactSlots = typeof __propDef.slots;
export default class MdViewCompact extends SvelteComponentTyped<MdViewCompactProps, MdViewCompactEvents, MdViewCompactSlots> {
}
export {};
