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
export type GiFrankensteinCreatureProps = typeof __propDef.props;
export type GiFrankensteinCreatureEvents = typeof __propDef.events;
export type GiFrankensteinCreatureSlots = typeof __propDef.slots;
export default class GiFrankensteinCreature extends SvelteComponentTyped<GiFrankensteinCreatureProps, GiFrankensteinCreatureEvents, GiFrankensteinCreatureSlots> {
}
export {};
