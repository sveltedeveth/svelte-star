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
export type GiWolfHowlProps = typeof __propDef.props;
export type GiWolfHowlEvents = typeof __propDef.events;
export type GiWolfHowlSlots = typeof __propDef.slots;
export default class GiWolfHowl extends SvelteComponentTyped<GiWolfHowlProps, GiWolfHowlEvents, GiWolfHowlSlots> {
}
export {};
