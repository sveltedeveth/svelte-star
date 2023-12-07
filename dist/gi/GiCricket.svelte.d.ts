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
export type GiCricketProps = typeof __propDef.props;
export type GiCricketEvents = typeof __propDef.events;
export type GiCricketSlots = typeof __propDef.slots;
export default class GiCricket extends SvelteComponentTyped<GiCricketProps, GiCricketEvents, GiCricketSlots> {
}
export {};
