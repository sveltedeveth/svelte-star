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
export type GiDeskProps = typeof __propDef.props;
export type GiDeskEvents = typeof __propDef.events;
export type GiDeskSlots = typeof __propDef.slots;
export default class GiDesk extends SvelteComponentTyped<GiDeskProps, GiDeskEvents, GiDeskSlots> {
}
export {};
