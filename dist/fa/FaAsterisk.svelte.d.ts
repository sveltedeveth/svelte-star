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
export type FaAsteriskProps = typeof __propDef.props;
export type FaAsteriskEvents = typeof __propDef.events;
export type FaAsteriskSlots = typeof __propDef.slots;
export default class FaAsterisk extends SvelteComponentTyped<FaAsteriskProps, FaAsteriskEvents, FaAsteriskSlots> {
}
export {};
