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
export type GiKimonoProps = typeof __propDef.props;
export type GiKimonoEvents = typeof __propDef.events;
export type GiKimonoSlots = typeof __propDef.slots;
export default class GiKimono extends SvelteComponentTyped<GiKimonoProps, GiKimonoEvents, GiKimonoSlots> {
}
export {};
