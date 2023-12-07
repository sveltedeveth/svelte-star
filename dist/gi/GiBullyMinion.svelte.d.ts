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
export type GiBullyMinionProps = typeof __propDef.props;
export type GiBullyMinionEvents = typeof __propDef.events;
export type GiBullyMinionSlots = typeof __propDef.slots;
export default class GiBullyMinion extends SvelteComponentTyped<GiBullyMinionProps, GiBullyMinionEvents, GiBullyMinionSlots> {
}
export {};
