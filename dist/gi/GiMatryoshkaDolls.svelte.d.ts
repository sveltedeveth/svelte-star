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
export type GiMatryoshkaDollsProps = typeof __propDef.props;
export type GiMatryoshkaDollsEvents = typeof __propDef.events;
export type GiMatryoshkaDollsSlots = typeof __propDef.slots;
export default class GiMatryoshkaDolls extends SvelteComponentTyped<GiMatryoshkaDollsProps, GiMatryoshkaDollsEvents, GiMatryoshkaDollsSlots> {
}
export {};
