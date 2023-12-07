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
export type GiCatapultProps = typeof __propDef.props;
export type GiCatapultEvents = typeof __propDef.events;
export type GiCatapultSlots = typeof __propDef.slots;
export default class GiCatapult extends SvelteComponentTyped<GiCatapultProps, GiCatapultEvents, GiCatapultSlots> {
}
export {};
