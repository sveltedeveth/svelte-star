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
export type GiLamellarProps = typeof __propDef.props;
export type GiLamellarEvents = typeof __propDef.events;
export type GiLamellarSlots = typeof __propDef.slots;
export default class GiLamellar extends SvelteComponentTyped<GiLamellarProps, GiLamellarEvents, GiLamellarSlots> {
}
export {};
