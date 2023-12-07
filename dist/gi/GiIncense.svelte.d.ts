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
export type GiIncenseProps = typeof __propDef.props;
export type GiIncenseEvents = typeof __propDef.events;
export type GiIncenseSlots = typeof __propDef.slots;
export default class GiIncense extends SvelteComponentTyped<GiIncenseProps, GiIncenseEvents, GiIncenseSlots> {
}
export {};
