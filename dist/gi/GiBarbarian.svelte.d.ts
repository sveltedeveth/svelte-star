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
export type GiBarbarianProps = typeof __propDef.props;
export type GiBarbarianEvents = typeof __propDef.events;
export type GiBarbarianSlots = typeof __propDef.slots;
export default class GiBarbarian extends SvelteComponentTyped<GiBarbarianProps, GiBarbarianEvents, GiBarbarianSlots> {
}
export {};
