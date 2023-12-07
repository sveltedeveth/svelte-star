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
export type GiBeltProps = typeof __propDef.props;
export type GiBeltEvents = typeof __propDef.events;
export type GiBeltSlots = typeof __propDef.slots;
export default class GiBelt extends SvelteComponentTyped<GiBeltProps, GiBeltEvents, GiBeltSlots> {
}
export {};
