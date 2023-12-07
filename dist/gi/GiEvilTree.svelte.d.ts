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
export type GiEvilTreeProps = typeof __propDef.props;
export type GiEvilTreeEvents = typeof __propDef.events;
export type GiEvilTreeSlots = typeof __propDef.slots;
export default class GiEvilTree extends SvelteComponentTyped<GiEvilTreeProps, GiEvilTreeEvents, GiEvilTreeSlots> {
}
export {};
