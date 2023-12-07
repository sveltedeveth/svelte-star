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
export type GiKevlarVestProps = typeof __propDef.props;
export type GiKevlarVestEvents = typeof __propDef.events;
export type GiKevlarVestSlots = typeof __propDef.slots;
export default class GiKevlarVest extends SvelteComponentTyped<GiKevlarVestProps, GiKevlarVestEvents, GiKevlarVestSlots> {
}
export {};
