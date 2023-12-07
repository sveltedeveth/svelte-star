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
export type GoGistSecretProps = typeof __propDef.props;
export type GoGistSecretEvents = typeof __propDef.events;
export type GoGistSecretSlots = typeof __propDef.slots;
export default class GoGistSecret extends SvelteComponentTyped<GoGistSecretProps, GoGistSecretEvents, GoGistSecretSlots> {
}
export {};
