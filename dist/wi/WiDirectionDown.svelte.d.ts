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
export type WiDirectionDownProps = typeof __propDef.props;
export type WiDirectionDownEvents = typeof __propDef.events;
export type WiDirectionDownSlots = typeof __propDef.slots;
export default class WiDirectionDown extends SvelteComponentTyped<WiDirectionDownProps, WiDirectionDownEvents, WiDirectionDownSlots> {
}
export {};
