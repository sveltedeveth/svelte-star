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
export type FaViharaProps = typeof __propDef.props;
export type FaViharaEvents = typeof __propDef.events;
export type FaViharaSlots = typeof __propDef.slots;
export default class FaVihara extends SvelteComponentTyped<FaViharaProps, FaViharaEvents, FaViharaSlots> {
}
export {};
