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
export type GiEvilMinionProps = typeof __propDef.props;
export type GiEvilMinionEvents = typeof __propDef.events;
export type GiEvilMinionSlots = typeof __propDef.slots;
export default class GiEvilMinion extends SvelteComponentTyped<GiEvilMinionProps, GiEvilMinionEvents, GiEvilMinionSlots> {
}
export {};
