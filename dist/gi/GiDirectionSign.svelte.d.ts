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
export type GiDirectionSignProps = typeof __propDef.props;
export type GiDirectionSignEvents = typeof __propDef.events;
export type GiDirectionSignSlots = typeof __propDef.slots;
export default class GiDirectionSign extends SvelteComponentTyped<GiDirectionSignProps, GiDirectionSignEvents, GiDirectionSignSlots> {
}
export {};
