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
export type GiTrollProps = typeof __propDef.props;
export type GiTrollEvents = typeof __propDef.events;
export type GiTrollSlots = typeof __propDef.slots;
export default class GiTroll extends SvelteComponentTyped<GiTrollProps, GiTrollEvents, GiTrollSlots> {
}
export {};
