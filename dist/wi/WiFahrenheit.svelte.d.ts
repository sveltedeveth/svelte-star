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
export type WiFahrenheitProps = typeof __propDef.props;
export type WiFahrenheitEvents = typeof __propDef.events;
export type WiFahrenheitSlots = typeof __propDef.slots;
export default class WiFahrenheit extends SvelteComponentTyped<WiFahrenheitProps, WiFahrenheitEvents, WiFahrenheitSlots> {
}
export {};
