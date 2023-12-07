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
export type FaFrownOpenProps = typeof __propDef.props;
export type FaFrownOpenEvents = typeof __propDef.events;
export type FaFrownOpenSlots = typeof __propDef.slots;
export default class FaFrownOpen extends SvelteComponentTyped<FaFrownOpenProps, FaFrownOpenEvents, FaFrownOpenSlots> {
}
export {};
