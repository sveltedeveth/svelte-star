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
export type TiBusinessCardProps = typeof __propDef.props;
export type TiBusinessCardEvents = typeof __propDef.events;
export type TiBusinessCardSlots = typeof __propDef.slots;
export default class TiBusinessCard extends SvelteComponentTyped<TiBusinessCardProps, TiBusinessCardEvents, TiBusinessCardSlots> {
}
export {};
