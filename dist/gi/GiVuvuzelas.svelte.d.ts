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
export type GiVuvuzelasProps = typeof __propDef.props;
export type GiVuvuzelasEvents = typeof __propDef.events;
export type GiVuvuzelasSlots = typeof __propDef.slots;
export default class GiVuvuzelas extends SvelteComponentTyped<GiVuvuzelasProps, GiVuvuzelasEvents, GiVuvuzelasSlots> {
}
export {};
