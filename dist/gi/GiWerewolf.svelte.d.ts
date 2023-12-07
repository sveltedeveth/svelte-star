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
export type GiWerewolfProps = typeof __propDef.props;
export type GiWerewolfEvents = typeof __propDef.events;
export type GiWerewolfSlots = typeof __propDef.slots;
export default class GiWerewolf extends SvelteComponentTyped<GiWerewolfProps, GiWerewolfEvents, GiWerewolfSlots> {
}
export {};
