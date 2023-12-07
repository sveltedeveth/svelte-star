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
export type GiSubwayProps = typeof __propDef.props;
export type GiSubwayEvents = typeof __propDef.events;
export type GiSubwaySlots = typeof __propDef.slots;
export default class GiSubway extends SvelteComponentTyped<GiSubwayProps, GiSubwayEvents, GiSubwaySlots> {
}
export {};
