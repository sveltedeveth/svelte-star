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
export type WiDirectionUpProps = typeof __propDef.props;
export type WiDirectionUpEvents = typeof __propDef.events;
export type WiDirectionUpSlots = typeof __propDef.slots;
export default class WiDirectionUp extends SvelteComponentTyped<WiDirectionUpProps, WiDirectionUpEvents, WiDirectionUpSlots> {
}
export {};
