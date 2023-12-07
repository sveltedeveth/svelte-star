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
export type GiSecretBookProps = typeof __propDef.props;
export type GiSecretBookEvents = typeof __propDef.events;
export type GiSecretBookSlots = typeof __propDef.slots;
export default class GiSecretBook extends SvelteComponentTyped<GiSecretBookProps, GiSecretBookEvents, GiSecretBookSlots> {
}
export {};
