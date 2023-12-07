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
export type GiThinkProps = typeof __propDef.props;
export type GiThinkEvents = typeof __propDef.events;
export type GiThinkSlots = typeof __propDef.slots;
export default class GiThink extends SvelteComponentTyped<GiThinkProps, GiThinkEvents, GiThinkSlots> {
}
export {};
