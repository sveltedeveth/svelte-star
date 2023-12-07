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
export type GiFallDownProps = typeof __propDef.props;
export type GiFallDownEvents = typeof __propDef.events;
export type GiFallDownSlots = typeof __propDef.slots;
export default class GiFallDown extends SvelteComponentTyped<GiFallDownProps, GiFallDownEvents, GiFallDownSlots> {
}
export {};
