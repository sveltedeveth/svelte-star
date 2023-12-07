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
export type GiHolyOakProps = typeof __propDef.props;
export type GiHolyOakEvents = typeof __propDef.events;
export type GiHolyOakSlots = typeof __propDef.slots;
export default class GiHolyOak extends SvelteComponentTyped<GiHolyOakProps, GiHolyOakEvents, GiHolyOakSlots> {
}
export {};
