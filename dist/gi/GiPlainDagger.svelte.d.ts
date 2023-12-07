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
export type GiPlainDaggerProps = typeof __propDef.props;
export type GiPlainDaggerEvents = typeof __propDef.events;
export type GiPlainDaggerSlots = typeof __propDef.slots;
export default class GiPlainDagger extends SvelteComponentTyped<GiPlainDaggerProps, GiPlainDaggerEvents, GiPlainDaggerSlots> {
}
export {};
