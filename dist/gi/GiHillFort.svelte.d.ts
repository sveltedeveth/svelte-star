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
export type GiHillFortProps = typeof __propDef.props;
export type GiHillFortEvents = typeof __propDef.events;
export type GiHillFortSlots = typeof __propDef.slots;
export default class GiHillFort extends SvelteComponentTyped<GiHillFortProps, GiHillFortEvents, GiHillFortSlots> {
}
export {};
